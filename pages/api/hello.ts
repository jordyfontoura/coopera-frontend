import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  name: string;
};

/**
 * @param {NextApiRequest} req The request object.
 * @param {NextApiResponse} res The response object.
 * @return {void} The response object.
 */
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
  res.status(200).json({name: 'John Doe'});
}
