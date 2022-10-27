import * as pi from "pareto-core-internals"

import * as api from "api-pareto-common"

export const aggregateStream: api.FAggregateStream = (
    $d
) => {
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            $d.connectToStream(
                $d.createParser(
                    cb,
                    (v, $i) => {
                        v._execute(($) => {
                            $i($)
                        })
                    }
                )
            )

        }
    )
}
