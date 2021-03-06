import React, { useState, useCallback } from 'react'
import emailjs from 'emailjs-com'
import ReactLoading from 'react-loading'

// Dialog
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const dialogStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})
const DialogTitle = withStyles(dialogStyles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'center',
    textAlign: 'center',
  },
}))(MuiDialogActions)

const ContactUs = () => {
  const [fullName, setFullName] = useState('')
  const [phoneNubmer, setPhoneNubmer] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  const handleClose = useCallback(() => {
    setOpen(false)
    history.push('/')
  }, history)

  const sendData = () => {
    if (fullName.length > 0 && phoneNubmer.length > 0 && !isLoading) {
      setIsLoading(true)
      emailjs.init('user_j84kyQl49mofRE66TC4Gk')
      emailjs
        .send('service_5lh8oun', 'template_kdhnrn5', { fullName: fullName, phoneNubmer: phoneNubmer })
        .then((res) => {
          setFullName('')
          setPhoneNubmer('')
          setMessage('!???????????? ???? ???????????? ?????? ???????????? ???????? ??????????, ????????')
          setOpen(true)
          setIsLoading(false)
        })
        .catch((err) => {
          setMessage('052-4315060 ???? ???????????? ???????? ???? ???????????? ??????, ?????? ???????? ???????? ?????????? ?????????? ?????? ????????????')
          setIsLoading(false)
        })
    }
  }
  return (
    <>
      <div style={styles.contactUsWrapper}>
        <p>?????? ?????????? ?????? ???????????? 052-4315060</p>
        <span className='line' />
        <p style={styles.text}>????</p>
        <p style={styles.text}>???????????? ?????????? ???????????? ?????????? ??????????</p>
        <input
          style={styles.input}
          type='text'
          value={fullName}
          name='full_name'
          placeholder={'???? ??????'}
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          style={styles.input}
          value={phoneNubmer}
          type='text'
          name='phone_number'
          placeholder={'???????? ??????????'}
          onChange={(event) => setPhoneNubmer(event.target.value)}
        />
        <div style={styles.button} onClick={() => sendData()}>
          {isLoading ? <ReactLoading type={'bubbles'} color={'white'} height={25} width={25} /> : '??????'}
        </div>
      </div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          ?????????
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <p style={{ textAlign: 'center ' }}>{message}</p>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            !??????????, ????????
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ContactUs

const styles = {
  contactUsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'AGENCY-FB',
    flex: '1',
  },
  text: {
    margin: '5px 0',
  },
  input: {
    padding: '5px',
    margin: '5px',
    textAlign: 'center',
    border: '2px solid black',
    outline: 'none',
    borderRadius: '0',
    appearance: 'none',
  },
  button: {
    display: 'flex',
    width: '100px',
    height: '25px',
    maxHeight: '25px',
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 15px',
    fontSize: '1.2em',
    margin: '10px 0 10px 0',
    cursor: 'pointer',
  },
}
