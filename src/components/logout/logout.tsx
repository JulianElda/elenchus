export default function Logout() {
  return (
    <>
    <div className="modal fade" id="logout-modal"
      aria-labelledby="logout-modal-label" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}