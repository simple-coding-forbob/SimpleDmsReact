export interface IFileDb {
  uuid?: string;
  fileTitle: string;
  fileContent: string;
  fileData?: File | null;
  fileUrl?: string;
}