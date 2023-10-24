const blogs = [
    {
        title: "Get started with Python",
        content: "Welcome! Are you completely new to programming? If not then we presume you will be looking for information about why and how to get started with Python. Fortunately an experienced programmer in any programming language (whatever it may be) can pick up Python very quickly. It's also easy for beginners to use and learn, so jump in!",
        slug: 'python-learn'
    },
    {
        title: "What is data science?",
        content: `Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization’s data. These insights can be used to guide decision making and strategic planning.
        The accelerating volume of data sources, and subsequently data, has made data science is one of the fastest growing field across every industry. As a result, it is no surprise that the role of the data scientist was dubbed the “sexiest job of the 21st century” by Harvard Business Review (link resides outside of IBM). Organizations are increasingly reliant on them to interpret data and provide actionable recommendations to improve business outcomes.
        The data science lifecycle involves various roles, tools, and processes, which enables analysts to glean actionable insights.`,
        slug: 'data-science'
    },
    {
        title: "Accounting Principles",
        content: `Accounting principles are the rules and guidelines that companies and other bodies must follow when reporting financial data. These rules make it easier to examine financial data by standardizing the terms and methods that accountants must use.

        The International Financial Reporting Standards (IFRS) is the most widely used set of accounting principles, with adoption in 167 jurisdictions. The United States uses a separate set of accounting principles, known as generally accepted accounting principles (GAAP). 
        Accounting standards are implemented to improve the quality of financial information reported by companies.
        In the United States, the Financial Accounting Standards Board (FASB) issues generally accepted accounting principles (GAAP).
        GAAP is required for all publicly traded companies in the U.S.; it is also routinely implemented by non-publicly traded companies as well.
        Internationally, the International Accounting Standards Board (IASB) issues International Financial Reporting Standards (IFRS).
        The FASB and the IASB sometimes work together to issue joint standards on hot-topic issues, but there is no intention for the U.S. to switch to IFRS in the foreseeable future.`,
        slug: 'accounting'
    },
    {
        title: "Use of express()",
        content: `This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

        Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
        
        A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.`,
        slug: 'use-express'
    }
]

module.exports = blogs