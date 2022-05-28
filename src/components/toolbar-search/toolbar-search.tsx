import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from "api/axios";
import { Entry, IdgardBox } from "types";

import FileList from "components/file-list/file-list";

export default function ToolbarSearch(props) {
  const { handleSubmit } = useForm();
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Array<Entry>>([]);
  const [boxList, setBoxList] = useState<Array<IdgardBox>>([]);

  const onSearch = () => {
    //findItemsInBox()
  };

  const findItemsInBox = (boxId) => {
    // TODO: types to radio select
    let types = "types=file,folder,note";
    let name = "name=" + query;

    axios
      .get(
        "/uiapi/FilterAPI/v1/rest/boxes/" +
          boxId +
          "/nodes?" +
          types +
          "&" +
          name
      )
      .then((res) => {
        setSearchResult(
          res.data.map(function (item) {
            return {
              id: item.node.id,
              type: item.type,
              name: item.node.name,
            };
          })
        );
      })
      .catch((res) => {});
  };

  useEffect(() => {
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes")
      .then((res) => {
        setBoxList(res.data);
      })
      .catch((res) => {});
  }, []);

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

            <FileList items={searchResult} />
          </div>
        </div>
      </div>
    </>
  );
}
