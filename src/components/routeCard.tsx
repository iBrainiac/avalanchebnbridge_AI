import * as React from 'react'
import Image from 'next/image'

interface routeProps {
    //symbol: string;
    //numOfMonths: number;
    route: any;
  }
  
  export async function Route({ 
   // symbol, 
    //numOfMonths, 
    route }: routeProps) {

    console.log('route', route)
    return (
        <div className="MuiContainer-root MuiContainer-maxWidthLg MuiContainer-disableGutters mui-1g8bthb">
            <div className="MuiBox-root mui-9kbecx" id="widget-header-:r6:">
                <header
                    className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed mui-d4rfx8"
                >
                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft MuiTypography-noWrap mui-1kju4fb"
                    >Swap</p>
                    <div className="MuiBox-root mui-afg6ra"><button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-wlrz0l"
                        type="button" id=":ri:" aria-label="Historial de transacciones"><svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-q7mezt" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="ReceiptLongIcon">
                            <path
                                d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11z">
                            </path>
                            <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"></path>
                        </svg></button><button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-cs5p9d"
                            type="button" id=":r8:" aria-label="Ajustes"><svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-q7mezt" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon">
                                <path
                                    d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6">
                                </path>
                            </svg></button></div>
                </header>
            </div>
            <div className="MuiContainer-root MuiContainer-maxWidthLg MuiContainer-disableGutters mui-1g8bthb">
                <div className="MuiContainer-root MuiContainer-maxWidthLg mui-p41get">
                    <div className="MuiBox-root mui-4rto7z"><button
                        className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mui-1amhr2k">
                        <div className="MuiCardContent-root mui-149wjq5">
                            <p className="MuiTypography-root MuiTypography-body1 mui-108izbk">Desde</p>
                            <div className="MuiCardHeader-root mui-bdm6jo">
                                <div className="MuiCardHeader-avatar mui-hsept5"><span className="MuiBadge-root mui-chz7cr">
                                    <div className="MuiAvatar-root MuiAvatar-circular mui-2z77s6">
                                        <Image alt="MNT"
                                        src="https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png"
                                        className="MuiAvatar-img mui-1184cla" /></div><span
                                            className="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginBottomRight MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular mui-1h9hxf9">
                                        <div className="MuiAvatar-root MuiAvatar-circular mui-1klhjob">
                                            <Image alt="Mantle"
                                            src="https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.png"
                                            className="MuiAvatar-img mui-1184cla" /></div>
                                    </span>
                                </span></div>
                                <div className="MuiCardHeader-content mui-1aan0jy"><span
                                    className="MuiTypography-root MuiTypography-body2 MuiCardHeader-title mui-fr31cd"
                                    title="MNT">MNT</span><span
                                        className="MuiTypography-root MuiTypography-body2 MuiCardHeader-subheader mui-1cypjxm"
                                        title="Mantle">Mantle</span></div>
                            </div>
                        </div>
                    </button>
                        <div className="MuiBox-root mui-qzesdl">
                            <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mui-nvq8jq"><svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-1l6e05h" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
                                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                            </svg></div>
                        </div><button className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mui-1amhr2k">
                            <div className="MuiCardContent-root mui-149wjq5">
                                <p className="MuiTypography-root MuiTypography-body1 mui-108izbk">A</p>
                                <div className="MuiCardHeader-root mui-bdm6jo">
                                    <div className="MuiCardHeader-avatar mui-hsept5"><span className="MuiBadge-root mui-chz7cr">
                                        <div className="MuiAvatar-root MuiAvatar-circular mui-2z77s6">
                                            <Image alt="USDC"
                                                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                                                className="MuiAvatar-img mui-1184cla" />
                                        </div><span
                                            className="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginBottomRight MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular mui-1h9hxf9">
                                            <div className="MuiAvatar-root MuiAvatar-circular mui-1klhjob"><Image alt="Mantle"
                                                src="https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.png"
                                                className="MuiAvatar-img mui-1184cla" /></div>
                                        </span>
                                    </span></div>
                                    <div className="MuiCardHeader-content mui-1aan0jy"><span
                                        className="MuiTypography-root MuiTypography-body2 MuiCardHeader-title mui-fr31cd"
                                        title="USDC">USDC</span><span
                                            className="MuiTypography-root MuiTypography-body2 MuiCardHeader-subheader mui-1cypjxm"
                                            title="Mantle">Mantle</span></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mui-1uesq8r">
                        <p className="MuiTypography-root MuiTypography-body1 mui-108izbk">Enviar</p>
                        <div className="MuiBox-root mui-stdxn0"><span className="MuiBadge-root mui-chz7cr">
                            <div className="MuiAvatar-root MuiAvatar-circular mui-2z77s6"><Image alt="MNT"
                                src="https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png"
                                className="MuiAvatar-img mui-1184cla" /></div><span
                                    className="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginBottomRight MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular mui-1h9hxf9">
                                <div className="MuiAvatar-root MuiAvatar-circular mui-1klhjob"><Image alt="Mantle"
                                    src="https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.png"
                                    className="MuiAvatar-img mui-1184cla" /></div>
                            </span>
                        </span>
                            <div className="MuiFormControl-root MuiFormControl-fullWidth mui-4gr4bp">
                                <div
                                    className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd mui-8uagf7">
                                    <input aria-invalid="false"

                                        className="MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd mui-1an92xn"
                                        type="text" value="4.678039267272148461" name="fromAmount" />
                                    <div
                                        className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium mui-xhyo8a">
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation mui-x9pxvz"
                                            type="button" id=":rj:">máximo</button></div>
                                </div>
                                <div
                                    className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled mui-uj34qx">
                                    <p className="MuiTypography-root MuiTypography-body1 mui-1y9s12t">4,90&nbsp;US$</p>
                                    <p className="MuiTypography-root MuiTypography-body1 mui-ay9ck4" title="4.696769343672148461">/
                                        4,696769</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mui-58qe3d">
                        <p className="MuiTypography-root MuiTypography-body1 mui-108izbk">Recibir</p><button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-1bn6y5v"
                            type="button" id=":rd:">
                            <div className="MuiBox-root mui-1ksps4p">
                                <span
                                    className="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary mui-emuiyw"
                                    role="progressbar">
                                    <svg
                                    className="MuiCircularProgress-svg mui-4ejps8" viewBox="22 22 44 44">
                                        <circle
                                            className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate mui-jllr68"
                                            cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"
                                        ></circle>
                                    </svg>
                                </span>
                                <span
                                    className="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary mui-1oqfzrg"
                                    role="progressbar"><svg className="MuiCircularProgress-svg mui-4ejps8" viewBox="22 22 44 44">
                                        <circle
                                            className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate mui-jllr68"
                                            cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"
                                        ></circle>
                                    </svg></span></div><span className="MuiTouchRipple-root mui-4mb1j7"></span>
                        </button>
                        <div className="MuiBox-root mui-19midj6">
                            <div className="MuiBox-root mui-1rr4qq7">
                                <div className="MuiBox-root mui-rqbxtu">
                                    <div className="MuiBox-root mui-hg75b5">
                                        <p className="MuiTypography-root MuiTypography-body1 mui-26gps0">Mejor retorno</p>
                                    </div>
                                </div>
                                <div className="MuiBox-root mui-c7peu">
                                    <div className="MuiBox-root mui-whp8qs"><span className="MuiBadge-root mui-1frt51r">
                                        <div className="MuiAvatar-root MuiAvatar-circular mui-2z77s6"><Image alt="USDC"
                                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                                            className="MuiAvatar-img mui-1184cla" /></div><span
                                                className="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginBottomRight MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular mui-1h9hxf9">
                                            <div className="MuiAvatar-root MuiAvatar-circular mui-1klhjob"><Image alt="Mantle"
                                                src="https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.png"
                                                className="MuiAvatar-img mui-1184cla" /></div>
                                        </span>
                                    </span>
                                        <div className="MuiBox-root mui-1rr4qq7">
                                            <div className="MuiBox-root mui-1s65hdw" title="4.906633"><svg
                                                viewBox="0 -15.360000610351562 79.20800018310547 19.45600128173828"
                                                width="100%" height="30" preserveAspectRatio="xMinYMid meet" fill="#ffffff">
                                                <title>4,906633</title><text x="0" y="0"
                                                >4,906633</text>
                                            </svg></div><span className="mui-1pttddr">
                                                <p className="MuiTypography-root MuiTypography-body1 mui-v0kdz3">4,91&nbsp;US$</p>
                                                <p className="MuiTypography-root MuiTypography-body1 mui-aqdhoj">•</p>
                                                <p className="MuiTypography-root MuiTypography-body1 mui-v0kdz3"
                                                    title="0,206421865">0,21&nbsp;%</p>
                                                <p className="MuiTypography-root MuiTypography-body1 mui-aqdhoj">•</p>
                                                <div className="MuiBox-root mui-1rb0v19">
                                                    <div className="MuiBox-root mui-8d8458"
                                                    >
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-v0kdz3">USDC en
                                                            Mantle</p>
                                                    </div>
                                                    <div className="MuiBox-root mui-8d8458"
                                                    >
                                                        <div className="MuiBox-root mui-1ventlw">
                                                            <div className="MuiAvatar-root MuiAvatar-circular mui-1klhjob"><Image
                                                                alt="LI.FI DEX Aggregator"
                                                                src="https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/exchanges/lifidexaggregator.svg"
                                                                className="MuiAvatar-img mui-1184cla" /></div>
                                                        </div>
                                                        <p className="MuiTypography-root MuiTypography-body1 mui-v0kdz3">LI.FI DEX
                                                            Aggregator</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div><button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-9ocko4"
                                        type="button" id=":rk:"><svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-1l6e05h" focusable="false"
                                            aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
                                            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                        </svg></button>
                                </div>
                                <div className="MuiBox-root mui-j5ve3t">
                                    <p className="MuiTypography-root MuiTypography-body1 mui-1agdeql" role="button">1 MNT ≈ 1,048865
                                        USDC</p>
                                    <div className="MuiBox-root mui-70qvj9">
                                        <div className="MuiBox-root mui-yhj9gm">
                                            <div className="MuiBox-root mui-12u64p4"><svg
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-1l6e05h"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="LocalGasStationRoundedIcon">
                                                <path
                                                    d="m19.77 7.23.01-.01-3.19-3.19c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71.16 1.1 1.1 1.99 2.2 2.11.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63 1.5.15 2.76-1.02 2.76-2.49V9c0-.69-.28-1.32-.73-1.77M12 10H6V6c0-.55.45-1 1-1h4c.55 0 1 .45 1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1">
                                                </path>
                                            </svg></div>
                                            <p className="MuiTypography-root MuiTypography-body1 mui-ytrg3c"
                                                data-value="0.00001193124">&lt;0,01&nbsp;US$</p>
                                        </div>
                                        <div className="MuiBox-root mui-70qvj9"
                                            aria-label="Tiempo estimado para completar la transacción de intercambio o puente, excluyendo el cambio de cadena y la aprobación de token.">
                                            <div className="MuiBox-root mui-12u64p4"><svg
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit mui-1l6e05h"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="AccessTimeFilledIcon">
                                                <path
                                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z">
                                                </path>
                                            </svg></div>
                                            <p className="MuiTypography-root MuiTypography-body1 mui-ytrg3c">30s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-1cbf1l2"
                            >
                                <div className="MuiCollapse-wrapper MuiCollapse-vertical mui-15830to">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical mui-9vd5ud">
                                        <div className="MuiBox-root mui-1yuhvjn"><button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth mui-3t2huu"
                                            type="button" id=":rn:">Mostrar todo<span
                                                className="MuiTouchRipple-root mui-4mb1j7"></span></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MuiBox-root mui-1tdhei3"><button
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth mui-9uj4ky"
                        type="button" id=":r9:">Review swap<span
                            className="MuiTouchRipple-root mui-4mb1j7"></span></button><button
                                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation mui-wvalw"
                                type="button" id=":rb:" aria-label="Enviar a una billetera diferente"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-q7mezt" focusable="false"
                                    aria-hidden="true" viewBox="0 0 24 24" data-testid="WalletIcon">
                                <path
                                    d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2">
                                </path>
                            </svg><span className="MuiTouchRipple-root mui-4mb1j7"></span></button></div>
                </div>
            </div>
        </div>
    );
}