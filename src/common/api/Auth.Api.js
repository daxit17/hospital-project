import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../FireBase";

export const SignUpApi = (data) => {

    console.log("SignUp:", data);

    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Please check your email..." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                });

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({ payload: "Email is already used..." })
                } else {
                    reject({ payload: errorMessage });
                }

                console.log(error);
            });

    })

}

export const SignInApi = (data) => {
    console.log("Sign-In", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    resolve({ payload: user });
                } else {
                    resolve({ payload: "please verify your email..." });
                }

                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Please Check Your Password." });
                } else if (errorCode.localeCompare("auth/user-not-found") == 0) {
                    reject({ payload: "Please Check Your Email" });
                } else {
                    reject({ payload: errorCode });
                }

            });

    })
}

export const LogOutApi = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => {
                resolve({ payload: "You are succesfully logout..." })
            })
            .catch((error) => {
                reject({ payload: error })
            })
    })
}

export const GoogleSignInApi = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                resolve({ payload: user });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

                reject({ payload: error });

            });

    })
}

export const ForgotPasswordApi = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Forgot PassWord SuccessFully and Check Your Email" })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject({ payload: "Email Is Wrong" })
                console.log(errorCode);
            })
    })
}