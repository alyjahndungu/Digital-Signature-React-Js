import React, { useState, useRef } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import SignaturePad from 'react-signature-canvas';
import Popup from 'reactjs-popup';

import 'src/views/Facilities/Pharmacy_Module/SigCanvas.css';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }, 

}));

const DigitalSignature = () => {
  const [imageURL, setImageURL] = useState(null);
  const classes = useStyles();

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <Page className={classes.root}>
      <Popup
        modal
        trigger={<Button>Open SignaturePad</Button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: 'signatureCanvas'
              }}
            />
            <Button onClick={close}>close</Button>
            <Button onClick={clear}>clear</Button>
            <Button onClick={save}>save</Button>
          </>
        )}
      </Popup>

      {imageURL ? (
        <img src ={ imageURL } alt="my signature" style={{display:'block', 
        
      margin: '0 auto', border: '1px solid black', width: '150px'}} /> 
      ) : null}
    </Page>
  );
};
export default DigitalSignature;
