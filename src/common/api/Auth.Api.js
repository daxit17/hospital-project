import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
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