import { DialogImage } from "@localtypes/DialogImage";

export const openImageDialog = (): Promise<DialogImage | null> =>
  new Promise((resolve, reject) => {
    const file = document.createElement("input");
    file.setAttribute("type", "file");
    file.click();

    file.onchange = function (ev) {
      const input = ev.target as HTMLInputElement;
      const { files } = input;

      if (files === null) return reject(null);

      const file = files.length === 1 ? files[0] : null;

      if (file === null) return resolve(null);

      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onerror = () => resolve(null);
      reader.onloadend = function () {
        if (reader.result === null) return reject(null);

        resolve({ file, url: String(reader.result) });
      };
    };
  });
