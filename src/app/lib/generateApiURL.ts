import * as urljoin from 'url-join';
import { environment } from '../../environments/environment';

const generateApiURL = (initialPath) => (...paths) => {
    const { apiURL } = environment;
    return urljoin(apiURL, initialPath, ...paths);
};

export default generateApiURL;
