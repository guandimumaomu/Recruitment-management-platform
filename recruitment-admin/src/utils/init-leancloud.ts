// SDK配置，让云端知晓提交图片者的ID，key

import Cloud from 'leancloud-storage'

// const Cloud = require("leancloud-storage");
// const { Query, User } = Cloud;
import { ID, KEY, DOMAIN } from "@/config";

Cloud.init({
    appId: ID,
    appKey: KEY,
    serverURL: DOMAIN
  });