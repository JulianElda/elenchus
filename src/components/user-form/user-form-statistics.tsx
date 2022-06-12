import React, { useState } from "react";
import { UserWrapper } from "idg-types";
import { formatDate, formatSize } from "components/common/util";

type UserFormStatisticsProps = {
  user?: UserWrapper;
};

export default function UserFormStatistics(props: UserFormStatisticsProps) {
  //* UserStorageStatistics */
  const [bookedAccountStorage] = useState<string>(
    formatSize(props.user?.statisticsUserStorage?.bookedAccountStorage || 0)
  );
  const [accountUsed] = useState<string>(
    formatSize(props.user?.statisticsUserStorage?.accountUsed || 0)
  );
  const [invited] = useState<string>(
    formatSize(props.user?.statisticsUserStorage?.invited || 0)
  );
  const [own] = useState<string>(
    formatSize(props.user?.statisticsUserStorage?.own || 0)
  );

  //* UserInfoStatistics */
  const [creationDate] = useState<string>(
    formatDate(props.user?.statisticsUserInfos?.creationDate || "")
  );
  const [creatorUUID] = useState<string>(
    props.user?.statisticsUserInfos?.creatorUUID || ""
  );
  const [lastChanged] = useState<string>(
    formatDate(props.user?.statisticsUserInfos?.lastChanged || "")
  );
  const [lastLogin] = useState<string>(
    formatDate(props.user?.statisticsUserInfos?.lastLogin || "")
  );
  const [countDatarooms] = useState<number>(
    props.user?.statisticsUserBox?.countDatarooms || 0
  );
  const [countGuests] = useState<number>(
    props.user?.statisticsUserBox?.countGuests || 0
  );
  return (
    <React.StrictMode>
      <div className="card">
        <div className="card-body">
          <h3>User statistics</h3>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <h4>Infos</h4>
              <div className="mb-3">
                <label htmlFor="creationdate-input" className="form-label">
                  Creation date
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="creationdate-input"
                  value={creationDate}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="creatoruuid-input" className="form-label">
                  Creator id
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="creatoruuid-input"
                  value={creatorUUID}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastchanged-input" className="form-label">
                  Last changed
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="lastchanged-input"
                  value={lastChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastlogin-input" className="form-label">
                  Last login
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="lastlogin-input"
                  value={lastLogin}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <h4>Storage</h4>

              <div className="mb-3">
                <label
                  htmlFor="bookedaccountstorage-input"
                  className="form-label">
                  Booked account storage
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="bookedaccountstorage-input"
                  value={bookedAccountStorage}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="accountused-input" className="form-label">
                  Account
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="accountused-input"
                  value={accountUsed}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="invitedstorage-input" className="form-label">
                  Invited
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="invitedstorage-input"
                  value={invited}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ownstorage-input" className="form-label">
                  Own
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="ownstorage-input"
                  value={own}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <h4>Box</h4>
              <div className="mb-3">
                <label htmlFor="countdataroom-input" className="form-label">
                  Count data rooms
                </label>
                <input
                  type="number"
                  readOnly
                  className="form-control"
                  id="countdataroom-input"
                  value={countDatarooms}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="countguests-input" className="form-label">
                  Count guests
                </label>
                <input
                  type="number"
                  readOnly
                  className="form-control"
                  id="countguests-input"
                  value={countGuests}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
