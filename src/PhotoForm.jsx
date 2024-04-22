import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import Tus from "@uppy/tus";
import { v4 as uuidv4 } from "uuid";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import { supabaseProjectId, supabaseAnonKey } from "./utils/supabaseClient";

const bucketName = "memories";
const folderName = "production";
const supabaseUploadURL = `https://${supabaseProjectId}.supabase.co/storage/v1/upload/resumable`;

export default function () {
  const [saved, setSaved] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [uppy] = useState(() => {
    const obj = new Uppy();
    obj.setOptions({
      restrictions: {
        maxFileSize: 1073741824,
      },
    });

    obj
      .use(Tus, {
        endpoint: supabaseUploadURL,
        headers: {
          authorization: `Bearer ${supabaseAnonKey}`,
        },
        chunkSize: 6 * 1024 * 1024,
        allowedMetaFields: [
          "bucketName",
          "objectName",
          "contentType",
          "cacheControl",
        ],
      })
      .on("file-added", (file) => {
        file.meta = {
          ...file.meta,
          bucketName: bucketName,
          objectName: `${folderName}/${uuidv4()}.${file.extension}`,
          contentType: file.type,
        };
      })
      .on("complete", (result) => {
        setSaved(true);
      });
    return obj;
  });

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <>
      {saved ? (
        <div>Your photos have been saved</div>
      ) : (
        <>
          <button onClick={handleOpen}>Upload Photo(s)</button>
          <DashboardModal
            uppy={uppy}
            proudlyDisplayPoweredByUppy={false}
            open={modalOpen}
            onRequestClose={handleClose}
          />
        </>
      )}
    </>
  );
}
