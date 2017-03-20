const Prefetcher = ({ onClickAction, prefetch, children }) => {
    let prefetching = false,
        fetching = false,
        result = undefined;

    const handleMouneEnter = () => {
        if (result || fetching || prefetching) {
            return;
        }

        prefetching = true;

        prefetch()
            .then((response) => {
                prefetching = false;
                result = response;

                fetching && onClickAction(result);
            });
    }

    const handleChildClicked = () => {
        fetching = true;

        if (result) {
            onClickAction(result);
        } else if (prefetching) {
            return;
        } else {
            prefetch();
        }
    }

    return React.cloneElement(children, {
        onClick: handleChildClicked,
        onMouseEnter: handleMouneEnter
    })
}

export default Prefetcher;