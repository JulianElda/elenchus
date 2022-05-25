type ConfirmModal = {
  id: string;
  header?: string;
  body?: string;

  cancel: Function;
  confirm: Function
};

export default function ConfirmModal(props: ConfirmModal) {

  return (
    <>
    <div className="modal fade" id={props.id+"-confirm-modal"} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>{props.header}</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {props.body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={e => props.cancel()}>Cancel</button>
            <button type="button" className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={e => props.confirm()}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}