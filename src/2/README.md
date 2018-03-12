# Question

Our team has just discovered that search engines are negatively scoring our webpages
that include a link to the domain shittylistings.com. For simplicity, assume that we have
50,000 HTML files in a Unix directory tree, under a folder called “/website” (e.g.
/website/home.html, /website/san-diego/2505-via-clarita.html, etc). We have 24 hours to
get a list of file paths to the editorial staff so they can edit the pages and remove the
links. You need to make a list of the .html files that contain links to the domain. How
would you solve the problem? Keep in mind our team is on a short deadline.

# Implementation Notes

For this problem, I implemented a stack to track our directories and files as we go through them. This way we can navigate through the file tree iteratively rather than recursively, which will help save us from any stack overflow issues. This solution has a time and space complexity of O(n), where n is the total number of files in the file system.
