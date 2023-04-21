import { s3Uploadsv2 } from "../aws/storage";

export async function home(req, res) {
  try {
    // const file = req.file[0]
    let resp = await s3Uploadsv2(file);

    let response = { result: "hello from controller" };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}
