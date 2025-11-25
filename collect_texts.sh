#!/bin/bash

echo "=== OpenAccount.jsx ==="
grep -E "(title|description|placeholder|Full Name|Email|Phone|Country|Terms|Create Account)" /app/frontend/src/pages/OpenAccount.jsx | head -20

echo -e "\n=== Accounts.jsx ==="
grep -E "Demo|Standard|Pro|VIP|Min\.|Leverage|Commission" /app/frontend/src/pages/Accounts.jsx | head -15

echo -e "\n=== MT5.jsx ==="
grep -E "title|subtitle|feature|description" /app/frontend/src/pages/platforms/MT5.jsx | head -15

echo -e "\n=== Pricing.jsx ==="
grep -E "title|subtitle|Spread|Fee|Commission" /app/frontend/src/pages/Pricing.jsx | head -15

echo -e "\n=== Funding.jsx ==="
grep -E "title|subtitle|Deposit|Withdrawal|Payment" /app/frontend/src/pages/Funding.jsx | head -15
