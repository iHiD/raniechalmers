import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
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

  const [uppy] = useState(() =>
    new Uppy()
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
        console.log(file)
        console.log(file.extension)
        file.meta = {
          ...file.meta,
          bucketName: bucketName,
          objectName: `${folderName}/${uuidv4()}.${file.extension}`,
          contentType: file.type,
        };
      })
      .on("complete", (result) => {
        setSaved(true);
      })
  );

  return (
    <>
      {saved ? (
        <div>Your photos have been saved</div>
      ) : (
        <Dashboard uppy={uppy} />
      )}
    </>
  );
}
