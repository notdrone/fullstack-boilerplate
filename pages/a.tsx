import * as React from 'react'
import styled from 'styled-components'

class Auth extends React.Component {
  public render() {
    return (
      <Flex>
        <Card>
          <form>
            <h1>Signup</h1>
            <Grid>
              <label htmlFor="email">Work email</label>
              <input id={'email'} type="text" placeholder={'work email'} />
              <label htmlFor="company">Company</label>
              <input type="text" placeholder="Company" />
              <label htmlFor="password">Password</label>
              <input type="password" placeholder={'password'} />
              <button type={'submit'}>Signup</button>
            </Grid>
          </form>
        </Card>
      </Flex>
    )
  }
}
export default Auth
const Card = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 180px;
`
