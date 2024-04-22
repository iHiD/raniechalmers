import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import Tus from "@uppy/tus";
import { v4 as uuidv4 } from "uuid";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import { supabaseProjectId, supabaseAnonKey } from "./utils/supabaseClient";

const bucketName = "memories";
const folderName = "production";
const supabaseUploadURL = `https://${supabaseProjectId}.supabase.co/storage/v1/upload/resumable`;

export default function () {
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
        setModalOpen(false)
        uppy.cancelAll()

        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className="confirm-alert">
                <p className="font-semibold mb-4">All Done 👍</p>
                <p className="mb-12 text-16">
              Your photos/videos have been sent to us. Thank you so much for sharing them. Please come back at any time to add more.
                </p>
                <button onClick={onClose}>Close window</button>
              </div>
            );
          },
        });

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
      <button onClick={handleOpen}>Upload photos or videos</button>
      <DashboardModal
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false}
        open={modalOpen}
        onRequestClose={handleClose}
      />
    </>
  );
}
