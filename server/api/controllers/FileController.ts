import { Request, Response } from "express";

export const FileController = {
  async downloadFile(req: Request, res: Response): Promise<void> {
    try {
      const filename: string = req.params.filename;
      res.download(`./api/public/${filename}`);
    } catch (error) {
      console.error("Error downloading file:", error);
      res.status(500).json({ error: "Could not download file" });
    }
  },
};
