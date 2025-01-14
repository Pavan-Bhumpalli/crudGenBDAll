import { StartFunc as StartFuncGetOnlineUsers } from "./GetOnlineUsers/EntryFile.js";
import { StartFunc as StartFuncGetProfileId } from "./GetProfileId/EntryFile.js";
import { StartFunc as StartFuncChangeNameId } from "./ChangeName/EntryFile.js";
import { StartFunc as StartFuncChatId } from "./ChatId/EntryFile.js";

const StartFunc = () => {
  StartFuncGetOnlineUsers();
  StartFuncGetProfileId();
  StartFuncChangeNameId();
  StartFuncChatId();
};

export { StartFunc };
