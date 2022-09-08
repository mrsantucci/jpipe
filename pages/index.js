import { withAuthenticator } from '@aws-amplify/ui-react'
import { 
  HeroLayout3 
} from '../src/ui-components'

function Home({signOut, user})  {
  return (
    <>
    <HeroLayout3 />
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
    </>
  );
}
export default withAuthenticator(Home)