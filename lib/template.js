const templates = {
  searchText: (url, query, page, offset) => `<a href="${url}">${url}</a>\n\n${query ? `Search keyword: ${query}\n` : ''}Page: ${page}\nOffset: ${offset}\n\n<b>${templates.updated()}</b><a href="${url}">&#160;</a>`,
  updated: () => `🗘 Updated ${templates.date(new Date())}`,
  date: (date = new Date()) => `${date.toISOString().replace(/-/i, '.').replace('T', ' ').slice(0, 23)}`
}
module.exports = templates
