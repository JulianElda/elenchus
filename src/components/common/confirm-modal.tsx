export default function ConfirmModal(props) {
  
  const id: string = props.id;
  const header: string = props.header;
  const body: string = props.body;

  const cancelCallback: Function = props.cancel;
  const confirmCallback: Function = props.confirm;

  return (
    <>
    <div className="modal fade" id={id+"-confirm-modal"} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>{header}</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={e => cancelCallback()}>Cancel</button>
            <button type="button" className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={e => confirmCallback()}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}