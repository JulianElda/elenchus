import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import api from "api/api-faker";
import { getBoxList } from "store/box-list";
import { BoxListType, FinderItemType } from "types";
import { FinderList } from "components/finder-list";

export function Finder() {
  const boxList = useSelector(getBoxList);
  const { handleSubmit } = useForm();
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Array<any>>([]);

  const onSearch = () => {
    setSearchResult(() => []);
    boxList.forEach(function (box: BoxListType) {
      findItemsInBox(box.id);
    });
  };

  const findItemsInBox = async (boxId) => {
    // TODO: types to radio select
    let types = "types=file,folder,note";
    let name = "name=" + query;

    const findCallback = function (res: FinderItemType[]) {
      setSearchResult((previousResult) =>
        previousResult.concat(
          res.map(function (item: FinderItemType) {
            return {
              item: item,
              boxId: boxId,
            };
          })
        )
      );
    };

    api.findItemsInBox(boxId, types, name, findCallback);
  };

  return (
    <>
      <div className="modal fade" id="toolbar-search-modal" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSearch)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find a file"
                    aria-label="File name"
                    aria-describedby="toolbar-search-find"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    id="toolbar-search-find"
                    className="btn btn-outline-secondary">
                    Find
                  </button>
                </div>
              </form>
            </div>

            <FinderList items={searchResult} />
          </div>
        </div>
      </div>
    </>
  );
}
