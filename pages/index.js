import { withAuthenticator } from '@aws-amplify/ui-react'

function Home({signOut, user})  {
  return (
    <>
    <h1 className="">Hi user {user.username}</h1>
    <h2>This tool is under development.</h2>
    <p> Check back soon.</p>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signOut}>Sign out</button>
    </>
  );
}
export default withAuthenticator(Home)