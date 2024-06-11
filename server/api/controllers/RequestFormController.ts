import { Request, Response } from "express";
import * as RequestModel from "../models/Request";
import Crypto from "crypto";
import { MailController } from "./MailController";

export const RequestFormController = {
  async getRequestById(req: Request, res: Response): Promise<void> {
    try {
      const requestId: string = req.params.Id;
      const request = await RequestModel.getRequestById(requestId);
      if (request) {
        res.status(200).json(request);
      } else {
        res.status(404).json({ error: "Request not found" });
      }
    } catch (error) {
      console.error("Error fetching request:", error);
      res.status(500).json({ error: "Could not fetch request" });
    }
  },

  async createRequest(req: Request, res: Response): Promise<void> {
    try {
      const newRequest = req.body;
      const request = await RequestModel.createRequest({
        ...newRequest,
        id: Crypto.randomBytes(16).toString("hex"),
      });
      await MailController.sendFormRequestEmail(request.id.toString());
      res.status(201).json(request);
    } catch (error) {
      console.error("Error creating request:", error);
      res.status(500).json({ error: "Could not create request" });
    }
  },
};
