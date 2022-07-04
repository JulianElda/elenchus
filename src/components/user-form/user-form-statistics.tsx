import React, { useState } from "react";
import { UserType } from "types";
import { formatDate, formatSize } from "components/common/util";

import {
  input_label_style,
  input_style,
  h3_style,
  h4_style,
} from "const/styles";

type UserFormStatisticsProps = {
  user: UserType;
};

export function UserFormStatistics(props: UserFormStatisticsProps) {
  //* UserStorageStatistics */
  const [bookedAccountStorage] = useState<string>(
    formatSize(props.user.statisticsUserStorage?.bookedAccountStorage || 0)
  );
  const [accountUsed] = useState<string>(
    formatSize(props.user.statisticsUserStorage?.accountUsed || 0)
  );
  const [invited] = useState<string>(
    formatSize(props.user.statisticsUserStorage?.invited || 0)
  );
  const [own] = useState<string>(
    formatSize(props.user.statisticsUserStorage?.own || 0)
  );

  //* UserInfoStatistics */
  const [creationDate] = useState<string>(
    formatDate(props.user.statisticsUserInfos?.creationDate || "")
  );
  const [creatorUUID] = useState<string>(
    props.user.statisticsUserInfos?.creatorUUID || ""
  );
  const [lastChanged] = useState<string>(
    formatDate(props.user.statisticsUserInfos?.lastChanged || "")
  );
  const [lastLogin] = useState<string>(
    formatDate(props.user.statisticsUserInfos?.lastLogin || "")
  );
  const [countDatarooms] = useState<number>(
    props.user.statisticsUserBox?.countDatarooms || 0
  );
  const [countGuests] = useState<number>(
    props.user.statisticsUserBox?.countGuests || 0
  );
  return (
    <React.StrictMode>
      <div className="divide-y divide-gray-200 shadow rounded bg-white p-4 my-4">
        <div className="">
          <h3 className={h3_style}>User statistics</h3>
          <div className="grid grid-cols-3 md:space-x-8">
            <div className="col-span-3 md:col-span-1">
              <h4 className={h4_style}>Infos</h4>
              <div className="mb-3">
                <label
                  htmlFor="creationdate-input"
                  className={input_label_style}>
                  Creation date
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="creationdate-input"
                  value={creationDate}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="creatoruuid-input"
                  className={input_label_style}>
                  Creator id
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="creatoruuid-input"
                  value={creatorUUID}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="lastchanged-input"
                  className={input_label_style}>
                  Last changed
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="lastchanged-input"
                  value={lastChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastlogin-input" className={input_label_style}>
                  Last login
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="lastlogin-input"
                  value={lastLogin}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <h4 className={h4_style}>Storage</h4>

              <div className="mb-3">
                <label
                  htmlFor="bookedaccountstorage-input"
                  className={input_label_style}>
                  Booked account storage
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="bookedaccountstorage-input"
                  value={bookedAccountStorage}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="accountused-input"
                  className={input_label_style}>
                  Account
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="accountused-input"
                  value={accountUsed}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="invitedstorage-input"
                  className={input_label_style}>
                  Invited
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="invitedstorage-input"
                  value={invited}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ownstorage-input" className={input_label_style}>
                  Own
                </label>
                <input
                  type="text"
                  readOnly
                  className={input_style}
                  id="ownstorage-input"
                  value={own}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <h4 className={h4_style}>Box</h4>
              <div className="mb-3">
                <label
                  htmlFor="countdataroom-input"
                  className={input_label_style}>
                  Count data rooms
                </label>
                <input
                  type="number"
                  readOnly
                  className={input_style}
                  id="countdataroom-input"
                  value={countDatarooms}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="countguests-input"
                  className={input_label_style}>
                  Count guests
                </label>
                <input
                  type="number"
                  readOnly
                  className={input_style}
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
