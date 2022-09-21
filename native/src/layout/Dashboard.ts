export const loadPage = async () => {
  const rawContent = await fetch('Dashboard.html')
  return await rawContent.text()
}

