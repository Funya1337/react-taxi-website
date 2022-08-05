import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextForm from './TextForm';

const DialogWindow = (props) => {
  console.log(props)
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleToClose}>
        <DialogTitle><div style={{fontWeight: 'bold'}}>АНКЕТА для водителей</div></DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            I am Good, Hope the same for you!
          </DialogContentText> */}
          <TextForm/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogWindow