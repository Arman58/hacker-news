const DataDate = ({time}: { time: number }) => {

    return (
        <>
        <span className="ml-1">
                      {new Date(time * 1000).toLocaleDateString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                      })}
                </span>
        </>
    )
}

export default DataDate
