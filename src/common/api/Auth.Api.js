import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
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
                    resolve({ payload: "You are successfully login..." });
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