import logo from '../../logo.svg'
import "@aws-amplify/ui-react/styles.css";
import { Card, Heading, View,Image, Button, withAuthenticator } from "@aws-amplify/ui-react"

const Login = ({signOut}) => {
    return(
        <View>
            <Card>
                <Image src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>Authentication</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    )
}
export default withAuthenticator(Login)