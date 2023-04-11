import './DeleteConfirm.css';

function DeleteConfirm({
  deleteConfirmShow,
  setDeleteConfirmShow,
  deleteJob,
  deleteId,
}) {
  return (
    <div
      className="overlay"
      style={{ display: deleteConfirmShow === true ? '' : 'none' }}
    >
      <div className="deleteConfirm">
        <div className="font-bold text-xl">Delete Job?</div>
        <div className="mt-2">
          You and others will no longer be able to see this job post.
        </div>
        <div className="btns mt-6">
          <div
            className="border py-2 w-4/5 text-center rounded-xl delete-btn font-semibold hover:cursor-pointer"
            onClick={() => {
              deleteJob(deleteId);
              setDeleteConfirmShow(false);
            }}
          >
            Delete
          </div>
          <div
            className="border mt-3 py-2 w-4/5 text-center rounded-xl font-semibold hover:cursor-pointer"
            onClick={() => {
              setDeleteConfirmShow(false);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
