export default function sitemap() {
  const baseUrl = 'https://clementmotel.com'; // Replace with actual domain

  const routes = [
    '',
    '/about',
    '/rooms',
    '/offers',
    '/restaurant',
    '/contact',
    '/book',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
