import PropTypes           from 'prop-types';
import React               from 'react';
import ContractTypeCell    from 'Modules/Portfolio/Components/contract-type-cell.jsx';
import Money               from '../money.jsx';
import BinaryLink          from '../../Routes/binary-link.jsx';
import { getContractPath } from '../../Routes/helpers';
import RemainingTime       from '../../../Containers/remaining-time.jsx';

const PositionsDrawerCard = ({
    currency,
    expiry_time,
    id,
    indicative,
    status,
    type,
    underlying,
}) => (
    <BinaryLink
        className='positions-drawer-card'
        to={getContractPath(id)}
    >
        <React.Fragment>
            <div className='positions-drawer-card__type'>
                <ContractTypeCell type={type} />
            </div>
            <div className={`positions-drawer-card__indicative positions-drawer-card__indicative--${status}`}>
                <Money amount={indicative} currency={currency} />
            </div>
            <span className='positions-drawer-card__symbol'>{underlying}</span>
            <span className='positions-drawer-card__remaining-time'>
                <RemainingTime end_time={expiry_time} />
            </span>
        </React.Fragment>
    </BinaryLink>
);

PositionsDrawerCard.propTypes = {
    currency   : PropTypes.string,
    expiry_time: PropTypes.PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    id        : PropTypes.number,
    indicative: PropTypes.number,
    status    : PropTypes.string,
    type      : PropTypes.string,
    underlying: PropTypes.string,
};

export default PositionsDrawerCard;
