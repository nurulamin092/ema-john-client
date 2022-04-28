/**
 * 1. create a new firebase project console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth and export auth; 
 * 4. authentication get started and enable email/password
 * 5. create Login, signUp component ,setup router
 * 6. attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created redirect to the expected page
 * 10. const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth) for sign in    
 * 11. Create RequireAuth component ==> check user exists also track user information 
 * 12. In route wrap Protected Component by using   RequireAuth component 
 * 
 */

/**
 * hosting steps
 * {
 * mkdir ~/.npm-global
 * npm config set prefix '~/.npm-global'
 * npm install -g firebase-tools
 * curl -sL firebase.tools | upgrade=true bash
 * }
 * 1. npm install -g firebase-tools(one time for your computer)
 * 2.firebase login(one time for your computer)
 * 3.firebase init (one time for each project)
 * 4.npm run build(every time you want to deploy)
 * 5.firebase deploy(every time you want to deploy)
 * 
 */