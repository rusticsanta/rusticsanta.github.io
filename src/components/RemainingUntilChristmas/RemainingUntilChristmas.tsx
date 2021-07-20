import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RemainingUntilChristmas.css';

interface ITime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Simple function to get the number of days to christmas
 */
function CalculateTimeLeftToChristmas(): ITime {
    const today = new Date();
    const cmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }

    const difference = cmas.getTime() - today.getTime();
    let timeLeft: ITime = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
}

const RemainingUntilChristmas: FunctionComponent = () => {
    const [timeLeft, setTimeLeft] = useState(CalculateTimeLeftToChristmas());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(CalculateTimeLeftToChristmas());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Container className="remaining-center">
            <Row>
                <Col>
                    <h1>{timeLeft.days} DAYS UNTIL CHRISTMAS!</h1>
                    <br />
                    <h1>
                        <div className="remaining-countdown">
                            <span>
                                {timeLeft.hours} <strong>Hours</strong>
                            </span>
                            <span>
                                {timeLeft.minutes} <strong>Minutes</strong>
                            </span>
                            <span>
                                {timeLeft.seconds} <strong>Seconds</strong>
                            </span>
                        </div>
                    </h1>
                </Col>
            </Row>
            <br />
            <Row>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default RemainingUntilChristmas;
