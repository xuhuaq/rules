# --- jijianhuilv_modify_response.js 内容开始 ---
/*
 * 这是 Shadowrocket response-body 脚本。
 * Shadowrocket 的 response-body 脚本的工作方式可能与 Surge/QX 略有不同。
 * 它通常会接收原始响应体作为参数，然后返回修改后的响应体。
 */

function modifyResponse(body) {
    try {
        var chxm1023 = JSON.parse(body);

        chxm1023.data = [
            {
                "uuid": "D53A4774-B52D-4B2C-A9EB-2ECAD9999999",
                "id": "dd9ce407ea984500a65957c2e0659999",
                "vipPayUnit": "year",
                "benefits": [],
                "expire": "2099-09-09 09:09:09",
                "vipStatus": "paid",
                "update": "2023-10-23 08:21:57",
                "vipLevel": "senior",
                "userId": "93fa3b800daa451646a5825c249c9999",
                "vipPayNum": 1,
                "vipPayType": "auto_sub",
                "created": "2023-10-23 08:21:52"
            }
        ];
        return JSON.stringify(chxm1023);
    } catch (e) {
        console.log("极简汇率脚本错误: " + e.message);
        return body; // 发生错误时返回原始body
    }
}

// Shadowrocket 的 response-body 脚本需要一个入口函数，
// 通常是一个名为 'httpResponse' 的函数，它会接收一个对象作为参数，
// 该对象包含 response.body 等属性。

// 如果是使用 URL Rewrite 中的 script-path 并且类型为 response-body，
// Shadowrocket 会将原始响应体作为参数传递给脚本的某个函数 (例如 modifyResponse)。
// 具体的函数名和参数传递方式可能因Shadowrocket版本而异。
// 这里假定 Shadowrocket 会查找一个可以处理 body 字符串的函数，或者
// 我们可以导出 modifyResponse 函数。

// 在Shadowrocket的response-body脚本中，通常需要一个主函数来处理响应。
// 常见的命名可能是 'httpResponse' 或者类似的。
// 请注意，Shadowrocket的脚本上下文和API与Surge/QX有差异。
// 这里的 'modifyResponse' 函数是一个通用逻辑，具体如何被Shadowrocket调用
// 还需要参考Shadowrocket的脚本文档。

// 对于 Shadowrocket 的 response-body rewrite，通常会将 JS 脚本内容直接
// 放在 URL Rewrite 规则的 `script-path` 后面，而不是在 [Script] 部分定义。
// 例如：`script-path=jijianhuilv_modify_response.js`

// 考虑到 Shadowrocket `response-body` 的实现，它期望脚本能够修改并返回体。
// 最直接的方式是脚本中定义一个主函数，例如 `httpResponse(response)`，
// 然后在函数内部修改 `response.body` 并返回。
// 但在这里，URL Rewrite 规则中直接使用 `script-path`，
// Shadowrocket 可能会将响应体作为参数传递给该脚本的某个约定函数。

// 最终建议：将上述 `modifyResponse` 函数的内容保存为 `jijianhuilv_modify_response.js` 文件。
// --- jijianhuilv_modify_response.js 内容结束 ---
