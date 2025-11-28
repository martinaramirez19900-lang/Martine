import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const RiskDisclosure = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto text-center">
          <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Risk Disclosure</h1>
          <p className="text-xl text-gray-600">Important Information About Trading Risks</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="font-bold text-red-900">
              WARNING: Trading in financial instruments carries a high level of risk and may result in the loss of all your invested capital. 
              You should only trade with money you can afford to lose.
            </p>
          </div>

          <h2>General Risk Warning</h2>
          <p>
            CFDs (Contracts for Difference) and leveraged products are complex financial instruments that carry a high risk of losing money rapidly 
            due to leverage. Between 74-89% of retail investor accounts lose money when trading CFDs. You should consider whether you understand 
            how these products work and whether you can afford to take the high risk of losing your money.
          </p>

          <h2>Leverage Risk</h2>
          <p>
            Leverage can amplify both gains and losses. While leverage allows you to control larger positions with a smaller amount of capital, 
            it also means that market movements can result in significant losses that may exceed your initial investment.
          </p>

          <h2>Market Volatility</h2>
          <p>
            Financial markets can be extremely volatile. Prices can change rapidly in very short periods, and past performance is not indicative of future results. 
            Unexpected market events can lead to significant losses.
          </p>

          <h2>Liquidity Risk</h2>
          <p>
            In certain market conditions, you may not be able to close a position at your desired price due to lack of liquidity. 
            This can result in larger losses than anticipated.
          </p>

          <h2>Currency Risk</h2>
          <p>
            If you trade in instruments denominated in a currency other than your base currency, exchange rate fluctuations 
            may adversely affect your returns.
          </p>

          <h2>Technology Risk</h2>
          <p>
            Trading platforms may experience technical issues, interruptions, or failures that could prevent you from executing trades 
            or managing positions when needed.
          </p>

          <h2>Regulatory Risk</h2>
          <p>
            Changes in laws, regulations, or government policies may affect your ability to trade or the value of your investments.
          </p>

          <h2>No Guaranteed Returns</h2>
          <p>
            There are no guarantees of profit in trading. Any historical performance or backtested results should not be interpreted as 
            a guarantee of future performance. All trading involves risk of loss.
          </p>

          <h2>Risk Management</h2>
          <p>
            We strongly recommend that you:
          </p>
          <ul>
            <li>Only trade with money you can afford to lose</li>
            <li>Use stop-loss orders to limit potential losses</li>
            <li>Diversify your portfolio</li>
            <li>Never risk more than 1-2% of your capital on a single trade</li>
            <li>Continuously educate yourself about markets and trading</li>
            <li>Seek independent financial advice if needed</li>
          </ul>

          <h2>Contact Information</h2>
          <p>
            If you have questions about the risks involved in trading, please contact our support team at support@smh-markets.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default RiskDisclosure;