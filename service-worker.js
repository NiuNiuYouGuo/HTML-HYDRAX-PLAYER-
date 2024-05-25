// service-worker.js

// 广告域名列表
const adDomains = [
    'connect.idocdn.com',
    'vekseptaufin.com'
];

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // 检查域名是否在广告域名列表中
    if (adDomains.some(domain => url.hostname.includes(domain))) {
        // 拦截并响应阻止请求
        event.respondWith(
            new Response('Blocked by custom policy', {
                status: 403,
                statusText: 'Forbidden',
                headers: {
                    'Content-Type': 'text/plain'
                }
            })
        );
    }
});
