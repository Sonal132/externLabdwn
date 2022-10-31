import { useState, useEffect } from "react";
export default function DownloadPublicFile(props) {
  const [download, setDownload] = useState(false);

  useEffect(() => {
    if (download) {
      const link = document.createElement("a");
      link.href =
        "http://localhost:9000/api/v1/service/email/attachment/dummy.pdf";
      link.setAttribute("download", "dummy.pdf");
      link.click();
      setDownload(false);
    }
  }, [download]);

  return <button onClick={() => setDownload(true)}>Download Public</button>;
}
