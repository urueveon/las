---
title: 'لماذا لغة C هي اللغة الأساسية في برنامج CS50 لجامعة هارفارد ؟'
date: '2019-09-07'
slug: 'blog/why-harvard-use-c-language-cs50-program'
template: 'post'
categories:
  - مقالات
tags:
  - سؤال وجواب
  - لغة C
thumbnail: '../thumbnails/computer.png'
---

> يجيب على هذا السؤال **David J. Malan**، بروفيسور في علوم الحاسب بجامعة هارفارد.

بعد لغة البرمجة **Assembly**، يمكن اعتبار C من أقرب لغات البرمجة إلى هاردوير الحاسب (Computer's hardware). والأولى لا يمكن وضعها في برنامج CS50 لأنه كما يعلم الجميع **برنامج تمهيدي**.

في لغة سي، **لا وجود للسحر**. إذا أردت وضع شيء ما في الذاكرة فعليك وضعه هناك بنفسك. إذا احتجت ل Hash Table فعليك إنجازه وتصميمه بنفسك! الهدف من هذا أن يفهم الطلاب بشكل جيد في نهاية الفصل كيف تعمل الأشياء من الأسفل إلى الأعلى، وأن يستطيعوا تفسير النتائج التي يحصلون عليها.

لغة C، بالإضافة إلى ما سبق، يمكن اعتبارها لغة صغيرة حيث يمكن للطلاب اكتشافها كاملة (تقريبا) في مدة المساق.

إنه لأمر مثير أن تقوم ببناء خوارزميات معقدة (مثال Hash Table) باستخدام لغة C في أسبوع كامل، وبعد ذلك بفترة قصيرة تقوم بفعل نفس الشيء باستخدام PHP أو JavaScript في سطر أو أسطر برمجية معدودة وتفهم كل ما يدور في كواليس تلك الأسطر التجريدية (Abstractions).

إيجابيات **لغة C** التي أشرنا إليها يمكن أن تكون نقاطا سلبية كذلك، إذ أنه من السهل جدا أن تقوم بوضع بيانات ومعلومات في الذاكرة عندما لا يكون عليك بالضرورة فعل ذلك. كما أن بعض الخوارزميات، الموجودة بشكل افتراضي في بعض لغات البرمجة المرتفعة المستوى (High-Level) مثل جافا أو بايثون، لا يكون تطبيقها وتنفيذها في C دائما أسهل مهمة في العالم :)

هذا كله يضع الطالب أمام تحديات تدفعه في نهاية المساق، كما هو مأمول، ليقول "**لقد تعلمت البرمجة**" عوض أن يقول "لقد تعلمت لغة البرمجة سي".

---

المصدر: [وكي بيديا](https://www.quora.com/)
