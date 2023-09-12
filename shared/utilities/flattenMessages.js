// This interface is using Indexed signature and Recursive type utility in TS.
// It just means our json might have key and value of type string or nested json.

export const flattenMessages = (nestedMessages, prefix = "") => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
