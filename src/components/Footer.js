import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'

const Footer = () => (
    <footer className="footer">
    <div className="container">
        <div className="btn-group" role="group" aria-label="Filter">
            <button type="button" className="btn btn-secondary">
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
            </button>
            <button type="button" className="btn btn-secondary">
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
            </button>
            <button type="button" className="btn btn-secondary">
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </button>
        </div>
    </div>
    </footer>
);

export default Footer
