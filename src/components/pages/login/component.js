import React, { useEffect, useState } from "react"
import SideBar from "components/shared/sidepanel"
import { makeStyles } from "tss-react/mui"
import {
  Grid,
  Typography,
  Link,
  CardContent,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material"
import CustomCard from "components/shared/card"
import CustomTextField from "components/shared/textfield"
import Logo from "components/shared/logo"
import palette from "theme/colors"
import Header from "components/shared/headers"
import { FiEye, FiEyeOff } from "react-icons/fi"

const useStyles = makeStyles()(theme => {
  return {
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30%",
      margin: 10,
    },
    TitleHeader: {
      //margin: 5,
      marginBottom: 20,
      position: "relative",
    },
    logo: {
      verticalAlign: "middle",
    },
    titleCard: {
      position: "absolute",
      top: "25%",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: palette.primary.main,
    },
    TextField: {
      height: "10%",
    },
    inputTitle: {
      alignItems: "left",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
    },
    boutonConnexion: {
      backgroundColor: palette.secondary.main,
      justifyContent: "center",
      fontSize: "18px",
      margin: 10,
    },
  }
})
const Login = () => {
  const { classes } = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  function handleSubmit(event) {
    console.log("Connexion attempt")
    console.log("email:", email)
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  return (
    <>
      <Header />
      <CustomCard className={classes.card}>
        <CardContent>
          <div className={classes.TitleHeader}>
            <Logo className={classes.logo} />
            <span className={classes.titleCard}>Connexion</span>
          </div>
          <Box
            sx={{
              marginTop: 2,
              border: "1px dashed red",
              width: "140%",
            }}
          >
            <span className={classes.inputTitle}>Email:</span>
            <br />
            <CustomTextField
              fullWidth
              className={classes.TextField}
              id="email"
              variant="standard"
              label="Adresse Email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ marginTop: 2, marginBottom: 3 }}>
            <span className={classes.inputTitle}>
              Mot de passe: <br />
            </span>
            <CustomTextField
              fullWidth
              className={classes.TextField}
              id="password"
              variant="standard"
              label="Mot de passe"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            disableElevation
            className={classes.boutonConnexion}
            onClick={() => handleSubmit()}
          >
            Connexion
          </Button>
        </CardContent>
      </CustomCard>
    </>
  )
}

export default Login
