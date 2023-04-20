export function home(req, res) {
  try {
    let response = { result: "hello from controller" };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}
