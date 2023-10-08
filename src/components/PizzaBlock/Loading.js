import ContentLoader from "react-content-loader";


const Loading = () => {
    return (
        <div className="card">
            <ContentLoader
                speed={2}
                width={270}
                height={447}
                viewBox="0 0 270 447"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="130" cy="130" r="130" />
                <rect x="0" y="266" rx="3" ry="3" width="270" height="20" />
                <rect x="0" y="290" rx="6" ry="6" width="270" height="103" />
                <rect x="0" y="405" rx="6" ry="6" width="88" height="32" />
                <rect x="120" y="396" rx="30" ry="30" width="150" height="50" />
            </ContentLoader>
        </div>
    )
}

export default Loading