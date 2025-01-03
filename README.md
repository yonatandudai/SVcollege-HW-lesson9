ש.ב שיעור 9

1.  צרו מסך בעל 2 כפתורים (שינוי צבע וביטול) ודיב נוסף.

לחיצה על כפתור שינוי הצבע הופכת את הכפתור ללא לחיץ ומחליפה את צבע הדיב מלבן לכחול כעבור 2 שניות (לאחר ההחלפה הכפתור חוזר להיות לחיץ)

אם במהלך שתי השניות שבין הלחיצה להחלפת הצבע מתבצעת לחיצה על כפתור הביטול, הצבע לא יתחלף וכפתור החלפת הצבע יחזור להיות פעיל.

על מנת לבצע זאת יש לקרוא על מתודה נוספת הנקראת clearTimeout

![Shape, square
Description automatically generated](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAEOCAIAAADzJr7PAAAfsElEQVR4Xu2d+XdUVbbH+Zve873VrWt1O7Z2g1O33SKDgqKINHOLICg4gMokozLPCQnzPBNmCBACIYQxBAhDAJFBcbbt9+m7Xx1vTg0nqQRS6Xw/P2RV6p57zq1if+7e+9at0OpfQoiMtPKfEELURpIIEUCSCBFAkvj8EnHnzp0LFy5UV1dfyD2qI3788ceffvqJQ719+/bZs2fPnz9vzzci586d++GHH1jinxE88N+sloEkSQFht2XLltLS0qNHj5YnOJozHDt2bNOmTbt37/7222+vXLmyYcOGw4cPH6k/vCj/qRgstG/fPiZnlRarhyFJUnDy5MmioqJbt24RH19//fVXEZy5iZXvv/+eZ7755puvGwYToqKlAmbjMc/YJpIYq/DT1q29379hMG4UFBRwhAcPHty2bZvNcDPBzz//bBmGxzazBzvayFsxbCRL2wB7+YWFhTyw7JoS/737T0SSpKCqqmrr1q03btwgXG5EEM3E4meffXbixAki8tSpU4QpUWXRZhEWjznby563Xy1ebbw9JpR37do1YcKEM2fOEI7Xr1+3Xdh68eLFq1ev2oT8tN3dY7h8+fKyZcuYpKysjEN1m1CLackzM2fOvHbt2nfffccmE8Mdpz22tdzx2GOOobKykh2//PJLBjB48eLFbG1RSiQjSVIQl4S4IYdMnDjx2Wef/fvf//7ggw9yCn/ttdcOHTqEOXbqBWp3At0yg+UcAtS1DTympmcYz1iUE8oo17ZtW6a6//77mZP4/jGC8R999NHmzZuZkCfZkVUYz4E5aS9durR06VIniVOR5QYMGPDXv/711Vdf/f3vf19SUsIztvp3ESQiS4ZMyINfou6LrfaTaZ9//nlOBF9EoAeSMK01JJJE/AqndicJkbR3797nnnuOToBNa9eupUzn15deeon4ZtOqVav69u3bp0+f7du3r1ixgsedO3fmAdnmrbfeat++/dtvv023PWXKlO7du8+ePRvrCNwdO3Y88cQTjGHO5cuX79y5k8zAhD179uRcPnz4cJoikkynTp3effdd+vIPPvjghRdeYAnLA0zIEnFJeBJR58+f//TTT5OImJbHFGNjx47t1avXP/7xD0aOGjUKzzt06EAPs2fPnq5du7788ss8pqbq16/f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)

1.  השתמשו בsetTimeout על מנת ליצור שעון עצר על עמוד הhtml , היורד בכל שנייה כלפי מטה, ומדפיס בסוף הזמן ״הזמן נגמר״
2.  יש לבנות פונקציית customIndexOf , שמקבלת שתי פרמטרים, מחרוזת, ותו שאנחנו מחפשים. המטרה היא לבנות בעצמנו את פונקציית indexOf, יש להתייחס לטיפול בשגיאות!
3.  בעזרת fetch, יש למשוך מהאתר [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) את רשימת המשתמשים, ויש להציג ברשימה את שם המשתמש ואת העיר בה הוא גר בhtml.