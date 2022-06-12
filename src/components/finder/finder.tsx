import { useState } from "react";
import { useForm } from "react-hook-form";

import api from "api/api";
import { IdgardBox } from "types";

import FinderList from "components/finder-list/finder-list";

type FinderProps = {
  boxes: IdgardBox[];
};

export default function Finder(props: FinderProps) {
  const { handleSubmit } = useForm();
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Array<any>>([]);

  const onSearch = () => {
    props.boxes.forEach(function (box: IdgardBox) {
      findItemsInBox(box.id);
    });
  };

  const findItemsInBox = async (boxId) => {
    // TODO: types to radio select
    let types = "types=file,folder,note";
    let name = "name=" + query;

    const findCallback = function (res) {
      setSearchResult((previousResult) =>
        previousResult.concat(
          res.map(function (item) {
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
